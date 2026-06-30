type ProductNameProps = {
  name: string;
  className?: string;
};

export default function ProductName({ name, className = '' }: ProductNameProps) {
  let parts: string[] | null = null;

  if (name === 'TeleReporting') {
    parts = ['Tele', 'Reporting'];
  } else if (name.startsWith('Proxo')) {
    const remainder = name.slice(5).trim();
    const words = remainder.split(' ');
    parts = ['Proxo', ...words];
  }

  if (!parts) {
    return <span className={`pm-product-name ${className}`.trim()}>{name}</span>;
  }

  return (
    <span className={`pm-product-name ${className}`.trim()}>
      <span>{parts[0]}</span><em>{parts[1]}</em>
      {parts.length > 2 && (
        <span style={{ color: 'var(--text-muted)', marginLeft: '0.25em', fontWeight: 400 }}>
          {parts.slice(2).join(' ')}
        </span>
      )}
    </span>
  );
}
