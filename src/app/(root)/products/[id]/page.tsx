import { redirect } from "next/navigation";
import { i18n } from "@/components/internationalization/config";

export default async function ProductDetailRootPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  redirect(`/${i18n.defaultLocale}/products/${id}`);
}