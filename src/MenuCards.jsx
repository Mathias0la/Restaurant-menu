import styled from "styled-components";

const Button = styled.button`
  background: #bf4f74;
  color: white;
  font-size: 15px;
  border-radius: 3px;
  border: 1px solid #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  box-shadow: 10px 5px 10px 5px black;

  &:hover {
    background: limegreen;
    border: 1px solid limegreen;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px black;
  }
`;
export default function MenuCards({
  data: { tittel, kategori, ingredienser, pris },
}) {
  const ingredienseListe = ingredienser
    .split(",")
    .map((ingrediens) => ingrediens.trim());
  return (
    <div className="menu-card">
      <h2>{tittel}</h2>
      <h3>{kategori}</h3>
      <p>Ingredienser:</p>
      <ul>
        {ingredienseListe.map((ingrediens, i) => (
          <li key={i}>{ingrediens}</li>
        ))}
      </ul>

      <div className="price-card">
        <Button>{pris}</Button>
      </div>
    </div>
  );
}
