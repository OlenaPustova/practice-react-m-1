const TransactionForm = () => {
  return (
    <form action="">
      <label>
        День
        <input type="date" />
      </label>
      <label>
        Час
        <input type="time" />
      </label>
      <label>
        Категорія
        <input type="button" value="Різне" />
      </label>
      <label>
        Сума
        <input type="text" />
      </label>
      <label>
        Валюта
        <input type="button" value="UAH" />
      </label>
      <label>
        <input type="text" placeholder="Коментар" />
      </label>
    </form>
  );
};

export default TransactionForm;
