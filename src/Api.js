import axios from "axios";
const params = {
    page: 1,
    limit: 10,
    sort: 'name',
  };
export default{	
	getData:()=>
	axios({method:"GET", url:"http://localhost:3000/users",params}),
	};
