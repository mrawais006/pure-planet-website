"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const Calculator = () => {
    // State Inputs
    const [monthlyBill, setMonthlyBill] = useState(150);
    const [sunlightHours, setSunlightHours] = useState(4.5);
    const [roofShade, setRoofShade] = useState("none"); // none, partial, heavy

    // State Outputs
    const [systemSize, setSystemSize] = useState(0);
    const [annualSavings, setAnnualSavings] = useState(0);
    const [panelsNeeded, setPanelsNeeded] = useState(0);
    const [co2Offset, setCo2Offset] = useState(0);

    // Constants
    const costPerKwh = 0.30; // Average cost
    const panelWattage = 400; // 400W panels
    const efficiency = 0.85; // System efficiency

    useEffect(() => {
        calculateSolar();
    }, [monthlyBill, sunlightHours, roofShade]);

    const calculateSolar = () => {
        // 1. Calculate Daily & Annual Usage in kWh
        // Monthly Bill ($) / Cost per kWh ($) = Monthly Usage (kWh)
        const monthlyUsageKwh = monthlyBill / costPerKwh;
        const dailyUsageKwh = monthlyUsageKwh / 30;
        const annualUsageKwh = monthlyUsageKwh * 12;

        // 2. Adjust for Shade
        let shadeFactor = 1.0;
        if (roofShade === "partial") shadeFactor = 0.85;
        if (roofShade === "heavy") shadeFactor = 0.65;

        // 3. Calculate Required System Size (kW)
        // Daily Usage / (Sunlight Hours * Efficiency * Shade)
        const requiredSizeKw = dailyUsageKwh / (sunlightHours * efficiency * shadeFactor);

        // 4. Calculate Panels
        // Size in Watts / Panel Wattage
        const panels = Math.ceil((requiredSizeKw * 1000) / panelWattage);

        // 5. Calculate Savings
        // Assume system offsets ~95% of bill indefinitely for this simple calc
        const savingsYearly = monthlyBill * 12 * 0.95;

        // 6. CO2 Offset (approx 0.85 lb per kWh)
        const co2 = annualUsageKwh * 0.85;

        setSystemSize(parseFloat(requiredSizeKw.toFixed(2)));
        setPanelsNeeded(panels);
        setAnnualSavings(parseFloat(savingsYearly.toFixed(0)));
        setCo2Offset(parseFloat(co2.toFixed(0)));
    };

    return (
        <main className="min-h-screen bg-[#062d16] text-white font-sans selection:bg-[#C2F32C] selection:text-black">
            <Navbar />

            {/* Header / Hero */}
            <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                    Calculate Your <span className="text-[#C2F32C]">Solar Savings</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Discover how much you could save by switching to solar. Our advanced calculator considers your local sunlight, energy usage, and roof conditions.
                </p>
            </div>

            {/* Calculator Section */}
            <div className="px-6 md:px-12 pb-24 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Inputs Column */}
                    <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#C2F32C] text-black flex items-center justify-center text-sm font-bold">1</span>
                            Your Energy Profile
                        </h3>

                        {/* Monthly Bill Input */}
                        <div className="mb-10">
                            <label className="flex justify-between items-center mb-4">
                                <span className="font-medium text-gray-200">Average Monthly Electric Bill</span>
                                <span className="text-[#C2F32C] font-bold text-xl">${monthlyBill}</span>
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="800"
                                step="10"
                                value={monthlyBill}
                                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C2F32C]"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>$50</span>
                                <span>$800+</span>
                            </div>
                        </div>

                        {/* Sunlight Hours Input */}
                        <div className="mb-10">
                            <label className="flex justify-between items-center mb-4">
                                <span className="font-medium text-gray-200">Daily Peak Sun Hours</span>
                                <span className="text-[#C2F32C] font-bold text-xl">{sunlightHours} hrs</span>
                            </label>
                            <p className="text-xs text-gray-400 mb-4">Based on your region's average sunlight availability.</p>
                            <input
                                type="range"
                                min="2"
                                max="8"
                                step="0.5"
                                value={sunlightHours}
                                onChange={(e) => setSunlightHours(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C2F32C]"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>2 hrs (Low)</span>
                                <span>8 hrs (High)</span>
                            </div>
                        </div>

                        {/* Roof Shade Input */}
                        <div className="mb-6">
                            <span className="block font-medium text-gray-200 mb-4">Roof Shade</span>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setRoofShade("none")}
                                    className={`py-3 rounded-xl border transition-all text-sm font-bold ${roofShade === "none" ? "bg-[#C2F32C] text-black border-[#C2F32C]" : "bg-transparent border-gray-600 hover:border-gray-400 text-gray-300"}`}
                                >
                                    Full Sun ☀️
                                </button>
                                <button
                                    onClick={() => setRoofShade("partial")}
                                    className={`py-3 rounded-xl border transition-all text-sm font-bold ${roofShade === "partial" ? "bg-[#C2F32C] text-black border-[#C2F32C]" : "bg-transparent border-gray-600 hover:border-gray-400 text-gray-300"}`}
                                >
                                    Partial ⛅
                                </button>
                                <button
                                    onClick={() => setRoofShade("heavy")}
                                    className={`py-3 rounded-xl border transition-all text-sm font-bold ${roofShade === "heavy" ? "bg-[#C2F32C] text-black border-[#C2F32C]" : "bg-transparent border-gray-600 hover:border-gray-400 text-gray-300"}`}
                                >
                                    Shaded ☁️
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Outputs Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-[#C2F32C] text-[#062d16] p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                            {/* Abstract Circle Pattern */}
                            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                                <span className="w-8 h-8 rounded-full bg-[#062d16] text-[#C2F32C] flex items-center justify-center text-sm font-bold">2</span>
                                Your Potential Results
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <p className="text-sm font-bold opacity-70 uppercase tracking-wider mb-1">Recommended System</p>
                                    <p className="text-5xl font-font-display font-bold">{systemSize} kW</p>
                                    <p className="text-sm font-medium mt-2 opacity-80">Requires approx. {panelsNeeded} panels</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold opacity-70 uppercase tracking-wider mb-1">Estimated Annual Savings</p>
                                    <p className="text-5xl font-font-display font-bold">${annualSavings}</p>
                                    <p className="text-sm font-medium mt-2 opacity-80">Based on current rates</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <p className="text-sm font-bold opacity-70 uppercase tracking-wider mb-1">CO₂ Offset (Yearly)</p>
                                    <p className="text-3xl font-bold">{co2Offset} lbs</p>
                                    <p className="text-sm font-medium mt-1 opacity-80">Equivalent to planting {(co2Offset / 48).toFixed(0)} trees 🌳</p>
                                </div>
                                <div className="flex items-center justify-end">
                                    <Link href="/contact" className="bg-[#062d16] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                                        Get Verified Quote &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Explanation Box */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <h4 className="font-bold text-xl mb-4 text-white">How This Is Calculated</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                We estimate your system size by dividing your daily energy needs (derived from your bill) by the peak sun hours in your area. We assume high-efficiency 400W panels and standard system losses (wiring, inverter efficiency).
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                *Note: This is a preliminary estimate. Actual production depends on specific roof angle, orientation (azimuth), and local weather patterns. Our engineers provide precision designs using satellite data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Calculator;
