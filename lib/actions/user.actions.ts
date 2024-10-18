"use server";
import { ID } from "node-appwrite";
import { createSessionClient } from "./appwrite";
import { createAdminClient } from "./appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async (userData: signInProps) => {
  try {
    const { email, password } = userData;

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(session);
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();

    const { password, email, firstName, lastName } = userData;

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();

    const user = await account.get();

    return parseStringify(user);
  } catch (err) {
    console.log("Error", err);
    return null;
  }
}

export const logout = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete("appwrite-session");

    await account.deleteSession("current");
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};
