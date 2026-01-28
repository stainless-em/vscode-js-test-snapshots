/** @jsxImportSource npm:react */
import inter from "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf" with { type: "bytes" };
import sourceCodePro from "https://fonts.gstatic.com/s/sourcecodepro/v31/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQhM4.ttf" with { type: "bytes" };
import satori from "npm:satori";

function Header({ children, color }) {
  return (
    <div
      style={{
        display: "flex",
        textTransform: "uppercase",
        fontSize: 14,
        fontWeight: 400,
        color: color,
        background: "rgb(248, 248, 248)",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid " + color,
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
          paddingLeft: 4,
          paddingRight: 4,
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </div>
    </div>
  );
}
function Pre({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        color: "#3b3b3b",
        fontWeight: "normal",
        fontSize: 12,
        margin: 0,
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        whiteSpace: "pre",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontFamily: "monospace",
        fontSize: "16px",
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        flexGrow: 1,
      }}
    >
      {children}
    </div>
  );
}
function Col({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        padding: 1,
        backgroundColor: "rgb(228, 228, 228)",
        width: 0,
        flexGrow: 1,
      }}
    >
      {children}
    </div>
  );
}
const toLines = (node) => {
  const lines = [];
  let line = [];
  const flush = () => {
    lines.push(<div style={{ display: "flex" }}>{line}</div>);
    line = [];
  };
  for (const part of node.props.children
    .flatMap((e) =>
      typeof e === "string"
        ? e.split("\n").flatMap((e, i) => (i ? ["\n", e] : [e]))
        : e,
    )
    .filter((_) => _)) {
    if (part === "\n") {
      flush();
    } else {
      line.push(part);
    }
  }
  if (line.length) flush();
  return lines;
};

const highlighted = toLines(
  <>
    <span style={{ color: "#008000" }}>
      // Vitest Snapshot v1, https://vitest.dev…
    </span>
    {"\n"}
    {"\n"}
    <span style={{ color: "#267f99" }}>exports</span>
    <span style={{ color: "#3b3b3b" }}>[</span>
    <span style={{ color: "#a31515" }}>`test 1`</span>
    <span style={{ color: "#3b3b3b" }}>] </span>
    <span style={{ color: "#000000" }}>=</span>
    <span style={{ color: "#3b3b3b" }}> </span>
    <span style={{ color: "#a31515" }}>{"`"}</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"{"}</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"array"</span>
    <span style={{ color: "#3b3b3b" }}>: [</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#098658" }}>1</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#098658" }}>2</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}[</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"      "}</span>
    <span style={{ color: "#098658" }}>3</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"      "}</span>
    <span style={{ color: "#098658" }}>4</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}],</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}],</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"bigint"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#098658" }}>100</span>
    <span style={{ color: "#0000ff" }}>n</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"bool"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#0000ff" }}>true</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"date"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#267f99" }}>2024-01-27T00:00:00.000Z</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"error"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#cd3131" }}>[Error: nested error]</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"func"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#267f99" }}>[Function]</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"map"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#267f99" }}>Map</span>
    <span style={{ color: "#3b3b3b" }}> {"{"}</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#a31515" }}>"k"</span>
    <span style={{ color: "#3b3b3b" }}> =&gt; </span>
    <span style={{ color: "#a31515" }}>"v"</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>
      {"  "}
      {"}"},
    </span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"nested"</span>
    <span style={{ color: "#3b3b3b" }}>: {"{"}</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#0451a5" }}>"deeper"</span>
    <span style={{ color: "#3b3b3b" }}>: {"{"}</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"      "}</span>
    <span style={{ color: "#0451a5" }}>"deepest"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#a31515" }}>"value"</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>
      {"    "}
      {"}"},
    </span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>
      {"  "}
      {"}"},
    </span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"nil"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#0000ff" }}>null</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"number"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#098658" }}>42</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"regex"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#811f3f" }}>/test/</span>
    <span style={{ color: "#0000ff" }}>i</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"set"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#267f99" }}>Set</span>
    <span style={{ color: "#3b3b3b" }}> {"{"}</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#098658" }}>1</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#098658" }}>2</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"    "}</span>
    <span style={{ color: "#098658" }}>3</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>
      {"  "}
      {"}"},
    </span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"string"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#a31515" }}>"text"</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"symbol"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#267f99" }}>Symbol(mixed)</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"  "}</span>
    <span style={{ color: "#0451a5" }}>"undef"</span>
    <span style={{ color: "#3b3b3b" }}>: </span>
    <span style={{ color: "#0000ff" }}>undefined</span>
    <span style={{ color: "#3b3b3b" }}>,</span>
    {"\n"}
    <span style={{ color: "#3b3b3b" }}>{"}"}</span>
    {"\n"}
    <span style={{ color: "#a31515" }}>{"`"}</span>
    <span style={{ color: "#3b3b3b" }}>;</span>
  </>,
);

const svg = await satori(
  <div
    style={{
      display: "flex",
      alignItems: "stretch",
      gap: "0.5rem",
      width: "100%",
      height: "100%",
    }}
  >
    <Col>
      <Header color="#787878">Before</Header>
      <Pre>
        {toLines(
          <>
            // Vitest Snapshot v1, https://vitest.dev…{"\n"}
            {"\n"}exports[`test 1`] = `{"\n"}
            {"{"}
            {"\n"}
            {"  "}"array": [{"\n"}
            {"    "}1,{"\n"}
            {"    "}2,{"\n"}
            {"    "}[{"\n"}
            {"      "}3,{"\n"}
            {"      "}4,{"\n"}
            {"    "}],{"\n"}
            {"  "}],{"\n"}
            {"  "}"bigint": 100n,{"\n"}
            {"  "}"bool": true,{"\n"}
            {"  "}"date": 2024-01-27T00:00:00.000Z,{"\n"}
            {"  "}"error": [Error: nested error],{"\n"}
            {"  "}"func": [Function],{"\n"}
            {"  "}"map": Map {"{"}
            {"\n"}
            {"    "}"k" =&gt; "v",{"\n"}
            {"  "}
            {"}"},{"\n"}
            {"  "}"nested": {"{"}
            {"\n"}
            {"    "}"deeper": {"{"}
            {"\n"}
            {"      "}"deepest": "value",{"\n"}
            {"    "}
            {"}"},{"\n"}
            {"  "}
            {"}"},{"\n"}
            {"  "}"nil": null,{"\n"}
            {"  "}"number": 42,{"\n"}
            {"  "}"regex": /test/i,{"\n"}
            {"  "}"set": Set {"{"}
            {"\n"}
            {"    "}1,{"\n"}
            {"    "}2,{"\n"}
            {"    "}3,{"\n"}
            {"  "}
            {"}"},{"\n"}
            {"  "}"string": "text",{"\n"}
            {"  "}"symbol": Symbol(mixed),{"\n"}
            {"  "}"undef": undefined,{"\n"}
            {"}"}
            {"\n"}`;
          </>,
        )}
      </Pre>
    </Col>
    <Col>
      <Header color="#0060B8">After</Header>
      <Pre>{highlighted}</Pre>
    </Col>
  </div>,
  {
    width: 860,
    height: 780,
    fonts: [
      {
        name: "monospace",
        data: sourceCodePro,
        weight: 400,
        style: "normal",
      },
      {
        name: "sans-serif",
        data: inter,
        weight: 400,
        style: "normal",
      },
    ],
  },
);

console.log(svg);
