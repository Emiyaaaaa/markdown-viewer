'use client'
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

	return (
    <main className="input">
		  <input className="" onChange={e => setValue(e.target.value)} />
      <button>
        <a href={`/?url=${value}`}>get</a>
      </button>
    </main>
	);
}