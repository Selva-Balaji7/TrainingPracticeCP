import {render,screen} from "@testing-library/react"
import MyNameComp from "./MyNameComp";

test("render myname Component",()=>{
    render(<MyNameComp />);
    let createElement=screen.getByText("My name is SelvaBalaji");
    expect(createElement).toBeInTheDocument();
})