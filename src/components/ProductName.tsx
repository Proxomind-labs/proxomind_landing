type ProductNameProps = {
  name: string;
  className?: string;
};

const productParts: Record<string, [string, string]> = {
  ProxoPACS: ['Proxo', 'PACS'],
  ProxoAI: ['Proxo', 'AI'],
  ProxoLIMS: ['Proxo', 'LIMS'],
  ProxoRIS: ['Proxo', 'RIS'],
  TeleReporting: ['Tele', 'Reporting'],
};

export default function ProductName({ name, className = '' }: ProductNameProps) {
  const parts = productParts[name];

  if (!parts) {
    return <span className={`pm-product-name ${className}`.trim()}>{name}</span>;
  }

  return (
    <span className={`pm-product-name ${className}`.trim()}>
      <span>{parts[0]}</span><em>{parts[1]}</em>
    </span>
  );
}
