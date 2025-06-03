/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { useState } from "react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onFilter: Function;
};

type FormData = {
  minValue?: number;
  maxValue?: number;
};

export default function Filter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleSubmit(event: any) {
    event.preventDefault();
    const min = Number(formData.minValue);
    const max = Number(formData.maxValue);
    onFilter(isNaN(min) ? undefined : min, isNaN(max) ? undefined : max);
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <section className="dsf-section-container">
      <div className="dsf-filter-container">
        <div className="dsf-form-container">
          <form className="dsf-form" onSubmit={handleSubmit}>
            <input
              name="minValue"
              type="text"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
            <input
              name="maxValue"
              type="text"
              placeholder="Preço máximo"
              onChange={handleInputChange}
            />
            <button type="submit">Filtrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
