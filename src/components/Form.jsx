import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id', type: 'numeric' },
      { title: 'Name', field: 'name', type: 'text' },
      { title: 'Email', field: 'email', type: 'email' },
      { title: 'Phone', field: 'phone', type: 'numeric'},
     /*  {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      }, */
    ],
    data: [
      { id: '1', name: 'Baran', email: 'name@getMaxListeners.com', phone: '0458490158' },
      {
        id: '2',
        name: 'Chill',
        email: 'chill@gmail.com',
        birthCity: 34,
      },
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
