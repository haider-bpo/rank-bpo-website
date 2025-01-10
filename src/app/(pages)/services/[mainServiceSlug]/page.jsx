import { servicesData } from "@/data/services-data";
import ServiceDetails from "../_components/service-details";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    mainServiceSlug: service.slug,
  }));
}

export default function MainServicePage({ params }) {
  const { mainServiceSlug } = params;

  // Find the main service
  const mainService = servicesData.find(
    (service) => service.slug === mainServiceSlug
  );

  if (!mainService) {
    return <div>Main service not found</div>;
  }

  return (
    <div className="dark">
      {/* Render main service details */}
      <ServiceDetails data={mainService} />
    </div>
  );
}
