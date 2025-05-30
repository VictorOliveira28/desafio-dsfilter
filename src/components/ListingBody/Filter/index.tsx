import "./styles.css";

export default function Filter() {
  return (
    <section className="dsf-section-container">
      <div className="dsf-filter-container">
        <div className="dsf-form-container">
          <form className="dsf-form">
            <input type="text" placeholder="Preço mínimo" />
            <input type="text" placeholder="Preço máximo" />
            <button>Filtrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
