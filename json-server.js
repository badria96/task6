const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3000;

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(cors());

// Create a route for recording attendance
server.post('/attendance', (req, res) => {
  const attendanceData = req.body;
  db.get('attendance').push(attendanceData).write();
  res.json({ message: 'Attendance recorded successfully' });
});

// Create a route for getting attendance data by date
server.get('/attendance/:date', (req, res) => {
  const date = req.params.date;
  const attendanceData = db.get('attendance').find({ date: date }).value();
  if (attendanceData) {
    res.json(attendanceData);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});


// Create a route for uploading files
server.post('/files', (req, res) => {
  const fileName = req.body.fileName;
  console.log('Received fileName:', fileName); // Log the received fileName
  db.get('files').push({ name: fileName }).write();
  res.json({ message: 'File uploaded successfully' });
});



// Create a route for loading both attendance and file data by date
server.get('/loadData/:selectedDate', (req, res) => {
  const selectedDate = req.params.selectedDate;
  const attendanceData = db.get('attendance').filter({ date: selectedDate }).value();
  const fileUploadData = db.get('files').value();
  res.json({ attendance: attendanceData, files: fileUploadData });
});

// Create a route for deleting all data by date
server.delete('/deleteData/:selectedDate', (req, res) => {
  const selectedDate = req.params.selectedDate;
  db.get('attendance').remove({ date: selectedDate }).write();
  db.set('files', []).write(); // Clear the "files" array
  res.json({ message: 'Data deleted successfully' });
});

// Create a route for deleting all data
server.delete('/attendance', (req, res) => {
  // Delete all attendance data
  db.set('attendance', []).write();
  res.json({ message: 'All data deleted successfully' });
});


server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
