interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card-glass-center group">
      <div className="flex justify-center mb-[24px] text-purple-400 group-hover:text-purple-300 transition-colors">
        <img src={icon} alt={title} className="w-auto h-auto" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-[16px]">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
