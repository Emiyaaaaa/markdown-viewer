'use client'
import { useState } from "react";
import { Header } from "./header";

export default function Input() {
  const [value, setValue] = useState("");

	return (
    <>
    <Header />
    <main className="input-container">
      <div className="input-wrapper">
		  <input placeholder="https://example.md" autoFocus className="" onChange={e => setValue(e.target.value)} />
      <button>
        <a href={`/?url=${value}`}>GO</a>
      </button>
      </div>
      <desc>Input a online markdown file uri, get a online preview markdown link.</desc>
    </main>
    </>

	);
}