
import { Container } from "./style"
import { Grid } from 'gridjs-react';

import "gridjs/dist/theme/mermaid.css";
export const Header: React.FC = () => {
  let da = 12
  return (
    <Container>
      <div className="logo">
      </div>

      <Grid
  data={[
    ['John', 'john@example.com'],
  
    ['Mike', 'mike@gmail.com']
  ]
}
  resizable={true}
  wi
  columns={['Name', 'Email','Phone','Cep','Name', 'Email','Phone','Cep']}
  search={true}
  pagination={{
    limit: 2,
  }}
  style={{
    td: {
      border: '1px solid #f00e0e'
    },
    table: {
      'font-size': '15px'
    }
  }}
/>
    </Container>
  )
  
}