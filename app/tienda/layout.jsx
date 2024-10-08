export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Sección Tienda</h3>
        <ul>
          <li>Categorias</li>
          <li>Productos</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
