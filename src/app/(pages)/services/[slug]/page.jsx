import ServiceDetails from "@/components/shared/service-details";
import { servicesData } from "@/data/services-data";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }) {
  const service = servicesData.find((service) => service.slug === params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="dark">
      <ServiceDetails
        title={service.title}
        subtitle={service.subtitle}
        overview={service.overview}
        processes={service.processes}
        technologies={service.technologies}
        benefits={service.benefits}
        subServices={service?.subServices || []}
        imageUrl={service.imageUrl}
      />
    </div>
  );
}
