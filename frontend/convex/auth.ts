import GitHub from "@auth/core/providers/github";
import Gitlab from "@auth/core/providers/gitlab";
import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub, Gitlab, Google],
});
