import { Button, Divider, Input } from "@nextui-org/react";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

// const slowDoubleNumber = (num) => {
//   for (let i = 0; i < 5000000000; i++) {}

//   return num * 2;
// };

const Counter = () => {
  const selector = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [inputCounter, setInputCounter] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  const incrementGlobalCounter = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrementGlobalCounter = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const setGlobalCounter = () => {
    dispatch({
      type: "SET",
      payload: inputCounter,
    });
  };

  // const doubleNumberResult = useMemo(() => {
  //   return slowDoubleNumber(count);
  // }, [count]);

  return (
    <div>
      <h1 className="text-center">Local state version</h1>
      <div className="flex items-center justify-around min-h-32">
        <Button onClick={decrementCounter} color="danger">
          Subtract
        </Button>
        <span className="text-3xl font-semibold">{count}</span>
        <Button onClick={incrementCounter} color="primary">
          Add
        </Button>
      </div>

      {/* <p className="text-center text-lg font-semibold">{doubleNumberResult}</p> */}

      <Divider />

      <h1 className="text-center">Global state version</h1>
      <div className="flex items-center justify-around min-h-32">
        <Button onClick={decrementGlobalCounter} color="danger">
          Subtract
        </Button>

        <div className="flex flex-col gap-1">
          <Input
            type="number"
            value={inputCounter}
            onChange={(event) => {
              setInputCounter(parseInt(event.target.value));
            }}
          />
          <Button onClick={setGlobalCounter} color="secondary">
            Set
          </Button>
        </div>

        <Button onClick={incrementGlobalCounter} color="primary">
          Add
        </Button>
      </div>
      <p className="text-center text-2xl font-semibold">
        Global count: {selector.count}
      </p>
    </div>
  );
};

export default Counter;

// class Counter extends React.Component {
//   state = {
//     count: 0,
//     inputCounter: 0,
//   };

//   incrementCounter = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrementCounter = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <div className="flex items-center justify-around min-h-32">
//           <Button onClick={this.decrementCounter} color="danger">
//             Subtract
//           </Button>
//           <span className="text-3xl font-semibold">{this.state.count}</span>
//           <Button onClick={this.incrementCounter} color="primary">
//             Add
//           </Button>
//         </div>

//         <Divider />

//         <h1 className="text-center">Global state version</h1>
//         <div className="flex items-center justify-around min-h-32">
//           <Button onClick={this.props.decrementGlobalCounter} color="danger">
//             Subtract
//           </Button>

//           <div className="flex flex-col gap-1">
//             <Input
//               type="number"
//               value={this.state.inputCounter}
//               onChange={(event) => {
//                 this.setState({ inputCounter: parseInt(event.target.value) });
//               }}
//             />
//             <Button
//               onClick={() =>
//                 this.props.setGlobalCounter(this.state.inputCounter)
//               }
//               color="secondary"
//             >
//               Set
//             </Button>
//           </div>

//           <Button onClick={this.props.incrementGlobalCounter} color="primary">
//             Add
//           </Button>
//         </div>
//         <p className="text-center text-2xl font-semibold">
//           Global count: {this.props.counter.count}
//         </p>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (store) => {
//   return {
//     counter: store.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementGlobalCounter: () => {
//       dispatch({
//         type: "INCREMENT",
//       });
//     },
//     decrementGlobalCounter: () => {
//       dispatch({
//         type: "DECREMENT",
//       });
//     },
//     setGlobalCounter: (inputCount) => {
//       dispatch({
//         type: "SET",
//         payload: inputCount,
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
