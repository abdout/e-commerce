import { redirect } from "next/navigation";
import { i18n } from "@/components/internationalization/config";

export default function SignInRedirect() {
  redirect(`/${i18n.defaultLocale}/sign-in`);
}