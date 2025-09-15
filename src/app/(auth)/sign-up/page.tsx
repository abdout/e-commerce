import { redirect } from "next/navigation";
import { i18n } from "@/components/internationalization/config";

export default function SignUpRedirect() {
  redirect(`/${i18n.defaultLocale}/sign-up`);
}