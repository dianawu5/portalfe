#Code to be changed upon received the server domain from back end.

## Maintenance.js

### Remove code

1. delete "import requestsList from '../mock-data.json';“

### Replace code

1. replace "const[data, setData]=useState(requestsList);" by "const[data, setData]=useState();"
2. replace handleDelete by:
   const handleDelete = async(requestId) => {
   setLoading(true);
   try{
   await deleteRequest(requestId);
   message.success("You delete a reqeust successfully!");
   handleGetData();
   } catch (error) {
   message.error(error.message);
   } finally {
   setLoading(false);  
    }
   };
3. replace <EditRequest info={record}/> by:
   <EditRequest info={record} onEditSuccess={handleGetData}/>
4. replace <NewRequestButton /> by <NewRequestButton onSubmitSuccess={handleGetData}/>

### Add code

1. add:
   const[loading, setLoading] = useState();
   useEffect(() => {
   handleGetData();  
   },[]);
2. add:
   const handleGetData() = async() => {
   setLoading(true);
   try {
   const resp const resp = await getRequests();
   setData(resp);
   } catch(error) {
   message.error(error.message);
   } finally {
   setLoading(false);
   }

## EditRequest.js

### Replace code

1. replace "const EditRequest = ({info})" by:
   "const EditRequest = ({info, onEditSuccess})"

### Add code

1. in "const onFormSubmit", add "onEditSuccess();" after
   "await updateRequest(data);
   message.success("Request is updated successfully!");"

## NewRequestButton.js

### Replace code

1. replace "NewRequestButton = ({})" by "NewRequestButton = ({onSubmitSuccess})"

### Add code

1. "const onFormSubmit", add "onSubmitSuccess();" after
   "await newRequest(data);
   message.success("Submit new maintenance request successfully!");"
