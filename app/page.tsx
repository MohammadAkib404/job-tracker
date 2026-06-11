import Applications from "@/components/Applications";
import { getApplications } from "@/lib/actions";

export default async function Home() {

  const allApplications = await getApplications();

  return (
    <Applications allApplications={allApplications} />
  );
}
