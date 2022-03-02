

```rust
struct Tutorial {
    let title: String
    let description: String
    let url: String // package-name
    // let state: 'draft' | 'in_progress' | 'completed' // TBD.
}
```

```rust
struct Proposal {
    let tutorial_id: String;
    let title: String
    let description: String
    let author: String
    let state: 'voting' | 'approved' | 'rejected'
}
```

rpc.Tutorial.get_tutorials() // returns Tutorial[]

const tutorial = rpc.Tutorial.get_tutorial(tutorial_id: String) // returns Tutorial.

rpc.tutorial.proposals({state: 'voting'}) // returns Proposal[] for the given  in state voting tutorial.


## let user publish a tutorial by creating proposal.

rpc.tutorial.create_tutorial({
    title: String,
    description: String,
    url: String,
})


### Create params for Tutorial & initial proposal //// TBD.
```rust
#[Accounts]
struct CreateTutorialParams {
    #[account(name="tutorial_author", seed, payer=author)]
    tutorial: Tutorial, // PDA 
    bounty: u128,  // Money is money bittch.
}
```

* Extension proposal.
* Update dependecy. 
  * solana ver 1.0.0
  * solana ver 2.0.0


