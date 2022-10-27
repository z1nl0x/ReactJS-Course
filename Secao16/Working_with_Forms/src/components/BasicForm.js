const BasicForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">Primeiro Nome</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Sobrenome</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">Endereço de E-Mail</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default BasicForm;
