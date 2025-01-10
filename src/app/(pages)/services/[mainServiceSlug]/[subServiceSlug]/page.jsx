import { servicesData } from "@/data/services-data";
import ServiceDetails from "../../_components/service-details";

export async function generateStaticParams() {
  const paths = [];

  // Loop through each main service
  servicesData.forEach((mainService) => {
    // Loop through each sub-service under the main service
    mainService.subServices.forEach((subService) => {
      paths.push({
        mainServiceSlug: mainService.slug,
        subServiceSlug: subService.slug,
      });
    });
  });

  return paths;
}

export default function SubServicePage({ params }) {
  const { mainServiceSlug, subServiceSlug } = params;

  // Find the main service
  const mainService = servicesData.find(
    (service) => service.slug === mainServiceSlug
  );

  if (!mainService) {
    return <div>Main service not found</div>;
  }

  // Find the sub-service under the main service
  const subService = mainService.subServices.find(
    (sub) => sub.slug === subServiceSlug
  );

  if (!subService) {
    return <div>Sub-service not found</div>;
  }

  return (
    <div className="dark">
      {/* Render sub-service details */}
      <ServiceDetails data={subService} />
    </div>
  );
}
