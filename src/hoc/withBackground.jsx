import React from "react";

export const withBackground = (InnerComponent) => {
  class WrapperComponent extends React.Component {
    render() {
      return (
        <div className="p-4 bg-teal-500">
          <InnerComponent {...this.props} />
        </div>
      );
    }
  }

  return WrapperComponent;
};
