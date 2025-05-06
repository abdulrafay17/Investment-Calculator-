import { useState } from "react"

export default function UserInput({ onChange , userInput }) {



    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    type="number" 
                    value={userInput.initialInvestment} 
                    required 
                    onChange={
                        (Event)=> onChange("initialInvestment", Event.target.value)
                    } />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                    type="number" 
                    value={userInput.annualInvestment} 
                    required 
                    onChange={
                        (Event)=> onChange("annualInvestment", Event.target.value)
                    } />
                </p>
                <p>
                    <label>Expected Return</label>
                    <input 
                    type="number" 
                    value={userInput.expectedReturn} 
                    required 
                    onChange={
                        (Event)=> onChange("expectedReturn", Event.target.value)
                    } />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                    type="number" 
                    value={userInput.duration} 
                    required 
                    onChange={
                        (Event)=> onChange("duration", Event.target.value)
                    } />
                </p>
            </div>
        </section>
    )
}