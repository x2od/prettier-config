import React from "react";

export const Card = ({ title, children }) => <section className="card" data-testid="card" onClick={() => console.log("clicked")}>{title && <h2>{title}</h2>}{children}</section>;

export const Empty = () => <p title='He said "hi"'>Nothing here</p>;
