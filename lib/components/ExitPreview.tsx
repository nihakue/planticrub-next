import { useAppContext } from "../hooks/appContext";
import Link from "next/link";

export function ExitPreviewLink() {
  const { preview } = useAppContext();
  if (preview) {
    return <Link href="/api/clearPreview"><a>Exit Preview Mode</a></Link>
  }
  return null;
}