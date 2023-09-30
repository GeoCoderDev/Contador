//´PUEDE SER ASI:

// const Contador = () => {
//   const [numero, setNumero] = React.useState(0);

//   console.log(numero);

//   return (
//     <div>
//       <h1>Contador: {numero}</h1>
//       <hr />
//       <button onClick={()=>{setNumero(numero + 1)}>Aumentar<button>
//       <button onClick={()=>{setNumero(numero - 1)>Disminuir<button>
//     </div>
//   );
// };

//O ASI:

const Contador = () => {
  const [numero, setNumero] = React.useState(0);

  console.log(numero);

  const aumentar = () => setNumero(numero + 1);
  const disminuir = () => setNumero(numero - 1);

  return (
    <div>
      <h1 className={(numero<0)?"menor":"mayor"}>Contador: {numero}</h1>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
