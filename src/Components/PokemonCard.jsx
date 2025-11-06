import React, { useEffect } from "react";
import "./PokemonCard.css";

export default function PokemonCard() {
	useEffect(() => {
		// DOM elementlerini seç
		const card = document.getElementById("pokemon-card");
		const holographicEffect = document.getElementById("holographic-effect");
		const instruction = document.getElementById("flip-instruction");

		// Kartı çevirme işlevi
		function toggleCardFlip() {
			card.classList.toggle("is-flipped");
			const isFlipped = card.classList.contains("is-flipped");
			card.setAttribute(
				"aria-label",
				isFlipped
					? "Etkileşimli Pokemon kartı, arka yüz görüntüleniyor. Çevirmek için tıklayın."
					: "Etkileşimli Pokemon kartı, ön yüz görüntüleniyor. Çevirmek için tıklayın."
			);
		}

		// Holografik efekt için fare takibi
		function updateHolographicEffect(e) {
			if (!card.classList.contains("has-mouse-position")) {
				card.classList.add("has-mouse-position");
			}
			const rect = card.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;
			const maxRotation = 10;
			const rotateY = maxRotation * (x - 0.5) * 2;
			const rotateX = maxRotation * (y - 0.5) * -2;

			if (!card.classList.contains("is-flipped")) {
				card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
			} else {
				card.style.transform = `rotateY(${180 + rotateY}deg) rotateX(${rotateX}deg)`;
			}

			holographicEffect.style.backgroundPosition = `${x * 200}% ${y * 200}%`;
			holographicEffect.style.opacity = 0.7;
		}

		// Fare karttan çıktığında efekti sıfırla
		function resetCardEffect() {
			card.classList.remove("has-mouse-position");
			if (!card.classList.contains("is-flipped")) {
				card.style.transform = "";
			} else {
				card.style.transform = "rotateY(180deg)";
			}
			holographicEffect.style.opacity = 0;
			instruction.style.opacity = "0";
		}

		// Olayları dinle
		card.addEventListener("click", toggleCardFlip);
		card.addEventListener("mousemove", updateHolographicEffect);
		card.addEventListener("mouseleave", resetCardEffect);
		card.addEventListener("mouseenter", () => {
			instruction.style.opacity = "1";
		});

		// Klavye erişilebilirliği
		card.addEventListener("keydown", (e) => {
			if (e.code === "Space" || e.code === "Enter") {
				e.preventDefault();
				toggleCardFlip();
			}
		});

		// Dokunmatik cihazlar
		card.addEventListener(
			"touchstart",
			(e) => {
				e.preventDefault();
			},
			{ passive: false }
		);
		card.addEventListener("touchend", () => {
			toggleCardFlip();
		});

		// Resim yüklenme sonrası animasyon
		window.addEventListener("load", () => {
			document.body.classList.add("loaded");
			const pokemonImage = document.querySelector(".card__image");
			pokemonImage.onerror = function () {
				pokemonImage.src =
					"https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10013110_001_ALT100/jibbitz";
			};
		});

		// Resize sırasında reset
		let resizeTimer;
		window.addEventListener("resize", () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				resetCardEffect();
			}, 250);
		});

		// Safari için düzeltme
		document.documentElement.style.setProperty("--webkit-perspective", "1000px");

		// Cleanup
		return () => {
			card.removeEventListener("click", toggleCardFlip);
			card.removeEventListener("mousemove", updateHolographicEffect);
			card.removeEventListener("mouseleave", resetCardEffect);
			card.removeEventListener("mouseenter", () => {
				instruction.style.opacity = "1";
			});
			window.removeEventListener("resize", resetCardEffect);
		};
	}, []);

	return (
		<>
			<div className="background-sparkles"></div>

			<div className="scene floater">
				<div
					className="card"
					id="pokemon-card"
					tabIndex="0"
					aria-label="Interactive Pokemon card. Click to spin."
				>
					{/* 前面 */}
					<div className="card__face card__face--front">
						<div className="card__holographic-effect" id="holographic-effect"></div>
						<div className="card__shine"></div>

						<div className="card__header">
							<div className="card__name">Pikachu</div>
							<div className="card__hp">60</div>
						</div>

						<div className="card__stage">Basic Pokemon</div>

						<div className="card__image-container">
							<div className="card__type" aria-label="Electric type">
								⚡
							</div>
							<img
								src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/pokemon.svg"
								alt="Pikachu character"
								className="card__image"
								loading="lazy"
							/>
						</div>

						<div className="card__info">
							<div className="card__description">
								This cute Pokémon can store an undetectable amount of electricity in its cheeks. When it feels threatened, it quickly produces electric shocks.
							</div>

							<div className="card__stats">
								<div>Height: 0.4 m</div>
								<div>Weight: 6.0 kg</div>
							</div>
						</div>

						<div className="card__power">#025 • Inflammation Mouse Pokemon</div>
					</div>

					{/* 背面 */}
					<div className="card__face card__face--back">
						<div className="card__holographic-effect"></div>
						<div className="card__shine"></div>

						<div className="card__title">Pikachu</div>

						<div className="card__ability">
							<div className="card__ability-header">
								<div className="card__ability-name">Static Shock</div>
								<div className="card__ability-cost">
									<div className="energy" aria-label="1 electric energy">
										⚡
									</div>
								</div>
							</div>
							<div className="card__ability-description">
								Deal 20 damage to the opponent. This attack has a 30% chance to paralyze the opponent.
							</div>
							<div className="card__ability-power">20+</div>
						</div>

						<div className="card__ability">
							<div className="card__ability-header">
								<div className="card__ability-name">Agile Attack</div>
								<div className="card__ability-cost">
									<div className="energy" aria-label="1 colorless energy">
										●
									</div>
									<div className="energy" aria-label="1 electric energy">
										⚡
									</div>
								</div>
							</div>
							<div className="card__ability-description">
								Deal 30 damage to the opponent. This attack ignores the opponent's defenses.
							</div>
							<div className="card__ability-power">30</div>
						</div>

						<div className="card__ability">
							<div className="card__ability-header">
								<div className="card__ability-name">Lightning Strike</div>
								<div className="card__ability-cost">
									<div className="energy" aria-label="2 electric energy">
										⚡
									</div>
									<div className="energy" aria-label="1 electric energy">
										⚡
									</div>
								</div>
							</div>
							<div className="card__ability-description">
								Deal 70 damage to the opponent. Pikachu must remain on the field for at least 2 turns to use this attack.
							</div>
							<div className="card__ability-power">70</div>
						</div>

						<div className="card__footer">
							<div>Artist: Ken Sugimori</div>
							<div className="card__rarity">
								Rarity: <span className="card__rarity-stars">★★★</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flip-instruction" id="flip-instruction">
					Click or press spacebar to flip card
				</div>
			</div>
		</>
	);
}
