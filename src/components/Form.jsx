import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id', type: 'numeric' },
      { title: 'Name', field: 'name', type: 'text' },
      { title: 'Email', field: 'email', type: 'email' },
      { title: 'Phone', field: 'phone', type: 'numeric'},
    ],
    data: [
      { id: '1', name: 'Baran', email: 'name@gmail.com', phone: '0458490158' },
      { id: '2', name: 'Chill', email: 'chill@gmail.com', phone: '0457850125' },
      { id: '3', name: 'James', email: 'james@gmail.com', phone: '0458490158' },
      { id: '4', name: 'Mina', email: 'mina@gmail.com', phone: '054854521' },
      { id: '5', name: 'Bina', email: 'bina@gmail.com', phone: '0458520145' },
      { id: '6', name: 'Joni', email: 'joni@gmail.com', phone: '0457255252' },
      { id: '7', name: 'Yoni', email: 'yoni@gmail.com', phone: '0458787878' },
      { id: '8', name: 'Hamza', email: 'hamza@gmail.com', phone: '021457888' },
      { id: '9', name: 'Umer', email: 'umer@gmail.com', phone: '04590907825' },
      { id: '10', name: 'Ali', email: 'ali@gmail.com', phone: '0548569602' },
    ],
  });

  return (
    <MaterialTable
      title="User Data App"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
