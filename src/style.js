const raw = `
.display-anything-line {
  margin: 4px 0;
  display: flex;
  justify-content: flex-start;
}
.display-anything-caret-icon {
  width: 18px;
  text-align: center;
  cursor: pointer;
}
.display-anything-empty-icon {
  width: 18px;
  transform: translateY(-50%);
  border-bottom: 1px dotted hotpink;
}
.display-anything-key {
  color: #a91479;
  font-weight: bold;
  margin-right: 4px;
  margin-left: 4px;
}
.display-anything-type {
  color: #a91479;
  font-weight: bold;
  margin-right: 4px;
  margin-left: 4px;
}
.display-anything-number {
  color: #132bff;
}
.display-anything-boolean {
  color: #0d5483;
}
.display-anything-string {
  color: #fd5246;
}
.display-anything-size {
  margin-right: 4px;
  margin-left: 4px;
}
.display-anything-fas {
  display: inline-block;
  border-style: solid;
  width: 0;
  height: 0;
}
.display-anything-caret-down {
  border-width: 6px 5px 0 5px;
  border-color: #808080 transparent;
}
.display-anything-caret-right {
  border-width: 5px 0 5px 6px;
  border-color: transparent transparent transparent #808080;
}
.display-anything-separator {
  color: rgba(0, 0, 0, 0.829);
  font-weight: bold;
  padding-right: 2px;
}
`;
const style = document.createElement('style');
style.innerHTML = raw;
const finalFunc = () => document.head.append(style);
// Add our <style> to <head> when possible
if (document.readyState === "complete") {
  finalFunc();
} else {
  // add when page is loaded
  document.addEventListener("DOMContentLoaded", finalFunc);
}
