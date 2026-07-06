import FormInpUseRef from './components/FormInpUseRef';
import FormUseRef from './components/FormUseRef';
import RHF from './components/RHF'

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-row items-center justify-center gap-2">
            <FormUseRef />
            <RHF />
            <FormInpUseRef />
        </div>
    );
}

export default App