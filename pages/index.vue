<template>
  <div>
    <section class="base-section hero-section">
      <div class="container hero-shell">
        <div class="hero-panel">
          <p class="eyebrow">Accueil</p>
          <h1 class="section-title">Centre de formation en neurosciences affectives et sociales</h1>
          <p class="section-intro">
            Nous accompagnons les professionnels et les familles en Guadeloupe avec des formations concrètes, humaines
            et applicables sur le terrain.
          </p>
          <div class="cta-row">
            <BaseButton to="/formations">Découvrir les formations</BaseButton>
            <BaseButton to="/actions" variant="secondary">Voir nos actions</BaseButton>
          </div>
          <div class="badge-row">
            <span class="badge badge--turquoise">Qualiopi</span>
            <span class="badge badge--yellow">Présentiel & distanciel</span>
            <span class="badge badge--coral">Approche terrain</span>
          </div>
        </div>

        <aside class="hero-aside">
          <div class="hero-orb hero-orb--yellow" />
          <div class="hero-orb hero-orb--turquoise" />
          <div class="hero-note">
            <p class="hero-note__kicker">Accompagnement local</p>
            <p class="hero-note__text">Petite enfance, éducation et structures d’accueil en Guadeloupe.</p>
          </div>
        </aside>
      </div>
    </section>

    <BaseSection title="Ce que nous proposons" heading-tag="h2">
      <div class="cards-grid cards-grid--3">
        <BaseCard
          title="Formations"
          text="Prévention de l’épuisement professionnel, aménagement d’espaces pédagogiques et outils de communication bienveillante."
        />
        <BaseCard
          title="Actions de terrain"
          text="Accompagnement des crèches, structures d’accueil et établissements scolaires avec diagnostics et plans d’action."
        />
        <BaseCard
          title="Ateliers et événements"
          text="Conférences gratuites, cafés des pratiques et ateliers en compétences psychosociales adaptés aux besoins locaux."
        />
      </div>
    </BaseSection>
  </div>
</template>
