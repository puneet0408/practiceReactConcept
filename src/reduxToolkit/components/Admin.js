import { useGetAccountsQuery , useAddAccountsMutation ,useDeleteAccountsMutation , useUpdateAccountsMutation } from "../api/adminSlice";
function Admin() {
  const { data, error, isloading } = useGetAccountsQuery();
    const [addAccount,response] =  useAddAccountsMutation();
const [deleteAccount,responsed] =useDeleteAccountsMutation();
const [updateAccounts] = useUpdateAccountsMutation();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {data?.map((account) => (
          <p>
            {account.id} : {account.amount}
            <button onClick={()=>deleteAccount(account.id)}>deleteAccount</button>
            <button onClick={()=>updateAccounts(account.id , 777)}>updateAccount</button>
          </p>


          
        ))}
    <button onClick={()=>addAccount(300,data.length+ 1)}>Add Account</button>
   
      </div>
    </div>
  );
}

export default Admin;
