export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="header-nested-layout">
        <div>{children}</div>
      </div>
    </>
  );
}
