// ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service__item mb-30 wow fadeInLeft animated" data-wow-delay=".2s">
      <div className="service__item-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
