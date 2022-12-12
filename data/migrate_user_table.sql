ALTER TABLE "user" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'member';

-- On rajoute la colonne role à notre model user et par défaut, si on précise pas de role pour un user, on lui colle member
