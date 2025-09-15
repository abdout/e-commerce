import AuthForm from "@/components/AuthForm";
import { signIn } from "@/lib/auth/actions";
import { getDictionary } from "@/components/internationalization/dictionaries";
import { type Locale } from "@/components/internationalization/config";

export default async function SignInPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <AuthForm mode="sign-in" onSubmit={signIn} dictionary={dictionary} lang={lang} />;
}