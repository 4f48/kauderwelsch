{
    description = "kauderwelsch";
    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
        utils.url = "github:numtide/flake-utils";
    };
    outputs = { self, nixpkgs, utils, ... }:
        utils.lib.eachDefaultSystem (system:
            let 
                pkgs = import nixpkgs { inherit system; };
            in 
            {
                devShell = with pkgs; mkShell {
                    buildInputs = with pkgs; [ nodejs_20 corepack_20 ];
                };
            }
        );
}