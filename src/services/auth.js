
import useSupabase from "../composables/UseSupabase";
const { supabase, auth } = useSupabase();

export const login = async (email, password) => {
  const { user, session, error } = await supabase.auth.signIn({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return { user, session };
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};

export const sendMagicLink = async (email) => {
  const { error } = await supabase.auth.signIn({
    email,
  });
  if (error) {
    throw error;
  }
};

export const updatePassword = async (email, password) => {
  const { error } = await supabase.auth.api.updateUser(email, {
    password,
  });
  if (error) {
    throw error;
  }
};

export const signInWithIdToken = async (credentials) => {
   const data =  await auth.signInWithIdToken(credentials)
   return data

}




export const getSession = async () => {
  const session = await supabase.auth.session();
  return session;
};
