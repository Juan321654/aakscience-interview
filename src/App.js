import './App.css';
import Card from './components/UI/card/Card';
import Page from './components/UI/page/Page';
import BarChart from './pages/barChart/BarChart';

function App() {
  return (
    <Page>
      <Card>
        <BarChart />
      </Card>
    </Page>
  );
}

export default App;
