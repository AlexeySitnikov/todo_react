const Main = ({todos})=>{
  return (
    <main>
      <ul class="list-group">
        {
          todos.map()
        }
        <li class="list-group-item">An item</li>
      </ul>
    </main>
  );
}

export {
  Main
}