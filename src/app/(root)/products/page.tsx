import { redirect } from "next/navigation";
import { i18n } from "@/components/internationalization/config";

export default function ProductsRootPage() {
  redirect(`/${i18n.defaultLocale}/products`);
}