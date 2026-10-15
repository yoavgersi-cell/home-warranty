// IndexNow key for www.tophomewarranty.com. Not a secret in the credential
// sense - the protocol requires it to be publicly served at /<key>.txt so
// engines can verify we own the host; it only authorizes submitting THIS
// host's URLs. Rotate by minting a new hex string, updating here, and
// renaming the public key file to match.
export const INDEXNOW_KEY = "3a8a985c207070853c6284b33d48b12b41b28579510725fadb384d3ceab7f41b";
export const INDEXNOW_HOST = "www.tophomewarranty.com";
