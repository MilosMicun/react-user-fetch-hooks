import { useFetchUser } from "../hooks/useFetchUser";

function User() {
    const {data,loading,error} = useFetchUser();

    if(loading) return <p>Loading user...</p>;
    if(error) return <p>Error:{error}</p>;

    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    );
};
export default User;